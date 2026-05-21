'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiSave, FiTrash2, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import TabNavigation from '@/components/dashboard/TabNavigation';

type Waitlist = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  brandColor: string;
  logo: string;
  accessMode: string;
  accessRate: number;
  accessPeriod: string;
  referralEnabled: number;
  referralBonus: number;
  widgetSettings: string;
};

export default function WaitlistSettingsPage({ params }: { params: { id: string } }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [waitlist, setWaitlist] = useState<Waitlist | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('general');
  
  // Form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [brandColor, setBrandColor] = useState('#0ea5e9');
  const [logo, setLogo] = useState('');
  const [accessMode, setAccessMode] = useState('fifo');
  const [accessRate, setAccessRate] = useState(10);
  const [accessPeriod, setAccessPeriod] = useState('day');
  const [referralEnabled, setReferralEnabled] = useState(true);
  const [referralBonus, setReferralBonus] = useState(5);
  const [widgetSettings, setWidgetSettings] = useState<any>({
    theme: 'light',
    layout: 'standard',
    fields: [
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'name', label: 'Name', type: 'text', required: false }
    ],
    submitButton: {
      text: 'Join Waitlist',
      color: '#0ea5e9'
    },
    successMessage: 'Thanks for joining our waitlist!',
    referralEnabled: true,
    referralMessage: 'Share with friends to move up the list!'
  });
  
  useEffect(() => {
    if (status === 'authenticated') {
      fetchWaitlist();
    }
  }, [status, params.id]);
  
  const fetchWaitlist = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/waitlists/${params.id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch waitlist');
      }
      
      const data = await response.json();
      setWaitlist(data);
      
      // Set form state
      setName(data.name);
      setDescription(data.description || '');
      setIsActive(data.isActive);
      setBrandColor(data.brandColor || '#0ea5e9');
      setLogo(data.logo || '');
      setAccessMode(data.accessMode || 'fifo');
      setAccessRate(data.accessRate || 10);
      setAccessPeriod(data.accessPeriod || 'day');
      setReferralEnabled(data.referralEnabled === 1);
      setReferralBonus(data.referralBonus || 5);
      
      if (data.widgetSettings) {
        try {
          const parsedSettings = JSON.parse(data.widgetSettings);
          setWidgetSettings(parsedSettings);
        } catch (err) {
          console.error('Error parsing widget settings:', err);
        }
      }
      
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };
  
  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(null);
      
      const updatedWaitlist = {
        name,
        description,
        isActive,
        brandColor,
        logo,
        accessMode,
        accessRate,
        accessPeriod,
        referralEnabled: referralEnabled ? 1 : 0,
        referralBonus,
        widgetSettings: JSON.stringify(widgetSettings)
      };
      
      const response = await fetch(`/api/waitlists/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWaitlist),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update waitlist');
      }
      
      setSuccess('Waitlist settings saved successfully');
      setSaving(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setSaving(false);
    }
  };
  
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this waitlist? This action cannot be undone.')) {
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/waitlists/${params.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete waitlist');
      }
      
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };
  
  const handleAddField = () => {
    setWidgetSettings({
      ...widgetSettings,
      fields: [
        ...widgetSettings.fields,
        { name: `field_${widgetSettings.fields.length + 1}`, label: 'Custom Field', type: 'text', required: false }
      ]
    });
  };
  
  const handleRemoveField = (index: number) => {
    const newFields = [...widgetSettings.fields];
    newFields.splice(index, 1);
    setWidgetSettings({
      ...widgetSettings,
      fields: newFields
    });
  };
  
  const handleFieldChange = (index: number, field: string, value: any) => {
    const newFields = [...widgetSettings.fields];
    newFields[index] = { ...newFields[index], [field]: value };
    setWidgetSettings({
      ...widgetSettings,
      fields: newFields
    });
  };
  
  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'access', label: 'Access Control' },
    { id: 'widget', label: 'Widget Settings' },
    { id: 'danger', label: 'Danger Zone' },
  ];
  
  if (status === 'loading' || loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>
          
          <div className="h-10 bg-gray-200 rounded mb-6"></div>
          
          <div className="space-y-6">
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (status === 'unauthenticated') {
    redirect('/login');
  }
  
  if (error && !waitlist) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
        <Link 
          href="/dashboard"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          <FiArrowLeft className="mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Link href={`/dashboard/waitlists/${params.id}`} className="mr-4 text-gray-500 hover:text-gray-700">
          <FiArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Waitlist Settings</h1>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex justify-between items-center">
          <span>{error}</span>
          <button onClick={() => setError(null)}>
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6 flex justify-between items-center">
          <span>{success}</span>
          <button onClick={() => setSuccess(null)}>
            <FiX className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        onChange={setActiveTab} 
      />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'general' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Waitlist Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., Product Launch, Beta Access"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Describe what this waitlist is for..."
                rows={4}
              />
              <p className="mt-1 text-sm text-gray-500">
                This will be displayed to your users when they sign up.
              </p>
            </div>
            
            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm font-medium text-gray-700">
                  Active
                </label>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                When inactive, users cannot sign up for this waitlist.
              </p>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'appearance' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="brandColor" className="block text-sm font-medium text-gray-700 mb-1">
                Brand Color
              </label>
              <div className="flex items-center">
                <input
                  type="color"
                  id="brandColor"
                  value={brandColor}
                  onChange={(e) => setBrandColor(e.target.value)}
                  className="h-10 w-10 border border-gray-300 rounded-md mr-2"
                />
                <input
                  type="text"
                  value={brandColor}
                  onChange={(e) => setBrandColor(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="#0ea5e9"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                This color will be used for buttons and accents in your waitlist widget.
              </p>
            </div>
            
            <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
                Logo URL
              </label>
              <input
                type="text"
                id="logo"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="https://example.com/logo.png"
              />
              <p className="mt-1 text-sm text-gray-500">
                Optional. Add your logo to the waitlist widget.
              </p>
            </div>
            
            {logo && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Logo Preview</p>
                <div className="border border-gray-200 rounded-md p-4 flex items-center justify-center">
                  <img src={logo} alt="Logo Preview" className="max-h-16" />
                </div>
              </div>
            )}
          </motion.div>
        )}
        
        {activeTab === 'access' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="accessMode" className="block text-sm font-medium text-gray-700 mb-1">
                Access Mode
              </label>
              <select
                id="accessMode"
                value={accessMode}
                onChange={(e) => setAccessMode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="fifo">First In, First Out (FIFO)</option>
                <option value="random">Random Selection</option>
                <option value="manual">Manual Approval</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Determines how users are granted access from the waitlist.
              </p>
            </div>
            
            <div>
              <label htmlFor="accessRate" className="block text-sm font-medium text-gray-700 mb-1">
                Access Rate
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="accessRate"
                  value={accessRate}
                  onChange={(e) => setAccessRate(parseInt(e.target.value))}
                  min="1"
                  className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mr-2"
                />
                <span className="text-gray-700">users per</span>
                <select
                  value={accessPeriod}
                  onChange={(e) => setAccessPeriod(e.target.value)}
                  className="ml-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                </select>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                How many users to let in from the waitlist per time period.
              </p>
            </div>
            
            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="referralEnabled"
                  checked={referralEnabled}
                  onChange={(e) => setReferralEnabled(e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="referralEnabled" className="ml-2 block text-sm font-medium text-gray-700">
                  Enable Referral System
                </label>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Allow users to move up the waitlist by referring others.
              </p>
            </div>
            
            {referralEnabled && (
              <div>
                <label htmlFor="referralBonus" className="block text-sm font-medium text-gray-700 mb-1">
                  Referral Bonus
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    id="referralBonus"
                    value={referralBonus}
                    onChange={(e) => setReferralBonus(parseInt(e.target.value))}
                    min="1"
                    className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mr-2"
                  />
                  <span className="text-gray-700">positions per referral</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  How many positions a user moves up for each successful referral.
                </p>
              </div>
            )}
          </motion.div>
        )}
        
        {activeTab === 'widget' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
                Widget Theme
              </label>
              <select
                id="theme"
                value={widgetSettings.theme}
                onChange={(e) => setWidgetSettings({ ...widgetSettings, theme: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto (System Preference)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="layout" className="block text-sm font-medium text-gray-700 mb-1">
                Widget Layout
              </label>
              <select
                id="layout"
                value={widgetSettings.layout}
                onChange={(e) => setWidgetSettings({ ...widgetSettings, layout: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="standard">Standard</option>
                <option value="compact">Compact</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Form Fields
              </label>
              
              <div className="space-y-4">
                {widgetSettings.fields.map((field: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-md p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Field {index + 1}</h4>
                      {index > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveField(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FiTrash2 />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Field Name
                        </label>
                        <input
                          type="text"
                          value={field.name}
                          onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Label
                        </label>
                        <input
                          type="text"
                          value={field.label}
                          onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Field Type
                        </label>
                        <select
                          value={field.type}
                          onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="text">Text</option>
                          <option value="email">Email</option>
                          <option value="tel">Phone</option>
                          <option value="url">URL</option>
                          <option value="number">Number</option>
                          <option value="textarea">Text Area</option>
                        </select>
                      </div>
                      
                      <div>
                        <div className="flex items-center h-full pt-6">
                          <input
                            type="checkbox"
                            checked={field.required}
                            onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label className="ml-2 block text-sm font-medium text-gray-700">
                            Required Field
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={handleAddField}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Add Field
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700 mb-1">
                Submit Button Text
              </label>
              <input
                type="text"
                id="buttonText"
                value={widgetSettings.submitButton.text}
                onChange={(e) => setWidgetSettings({
                  ...widgetSettings,
                  submitButton: {
                    ...widgetSettings.submitButton,
                    text: e.target.value
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="successMessage" className="block text-sm font-medium text-gray-700 mb-1">
                Success Message
              </label>
              <input
                type="text"
                id="successMessage"
                value={widgetSettings.successMessage}
                onChange={(e) => setWidgetSettings({
                  ...widgetSettings,
                  successMessage: e.target.value
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                Shown to users after they successfully join the waitlist.
              </p>
            </div>
            
            <div>
              <label htmlFor="referralMessage" className="block text-sm font-medium text-gray-700 mb-1">
                Referral Message
              </label>
              <input
                type="text"
                id="referralMessage"
                value={widgetSettings.referralMessage}
                onChange={(e) => setWidgetSettings({
                  ...widgetSettings,
                  referralMessage: e.target.value
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="mt-1 text-sm text-gray-500">
                Encourages users to share their referral link.
              </p>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'danger' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <h3 className="text-lg font-medium text-red-800 mb-2">Delete Waitlist</h3>
              <p className="text-red-700 mb-4">
                This action cannot be undone. This will permanently delete the waitlist and all associated data.
              </p>
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                <FiTrash2 className="mr-2" />
                Delete Waitlist
              </button>
            </div>
          </motion.div>
        )}
        
        {activeTab !== 'danger' && (
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {saving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <FiSave className="mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
