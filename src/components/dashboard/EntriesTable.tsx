'use client';

import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiEdit, FiTrash2, FiMail, FiCheck, FiX } from 'react-icons/fi';

type WaitlistEntry = {
  id: string;
  email: string;
  name: string;
  referralCode: string;
  referredBy: string | null;
  position: number;
  status: string;
  referralCount: number;
  createdAt: number;
};

type EntriesTableProps = {
  entries: WaitlistEntry[];
  waitlistId: string;
  onRefresh: () => void;
};

export default function EntriesTable({ entries, waitlistId, onRefresh }: EntriesTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof WaitlistEntry>('position');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedEntries, setSelectedEntries] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  
  // Filter entries based on search term
  const filteredEntries = entries.filter(entry => 
    entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (entry.name && entry.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Sort entries
  const sortedEntries = [...filteredEntries].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });
  
  // Pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = sortedEntries.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(sortedEntries.length / entriesPerPage);
  
  const handleSort = (field: keyof WaitlistEntry) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const handleSelectAll = () => {
    if (selectedEntries.length === currentEntries.length) {
      setSelectedEntries([]);
    } else {
      setSelectedEntries(currentEntries.map(entry => entry.id));
    }
  };
  
  const handleSelectEntry = (id: string) => {
    if (selectedEntries.includes(id)) {
      setSelectedEntries(selectedEntries.filter(entryId => entryId !== id));
    } else {
      setSelectedEntries([...selectedEntries, id]);
    }
  };
  
  const handleApprove = async (id: string) => {
    try {
      const response = await fetch(`/api/waitlists/${waitlistId}/entries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'approved',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to approve entry');
      }
      
      onRefresh();
    } catch (err) {
      console.error('Error approving entry:', err);
      alert('Failed to approve entry');
    }
  };
  
  const handleReject = async (id: string) => {
    try {
      const response = await fetch(`/api/waitlists/${waitlistId}/entries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'rejected',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to reject entry');
      }
      
      onRefresh();
    } catch (err) {
      console.error('Error rejecting entry:', err);
      alert('Failed to reject entry');
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/waitlists/${waitlistId}/entries/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete entry');
      }
      
      onRefresh();
    } catch (err) {
      console.error('Error deleting entry:', err);
      alert('Failed to delete entry');
    }
  };
  
  const handleBulkAction = async (action: 'approve' | 'reject' | 'delete') => {
    if (selectedEntries.length === 0) {
      return;
    }
    
    if (action === 'delete' && !confirm(`Are you sure you want to delete ${selectedEntries.length} entries?`)) {
      return;
    }
    
    try {
      // In a real app, this would be a single API call to handle bulk actions
      for (const id of selectedEntries) {
        if (action === 'approve' || action === 'reject') {
          await fetch(`/api/waitlists/${waitlistId}/entries/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              status: action,
            }),
          });
        } else if (action === 'delete') {
          await fetch(`/api/waitlists/${waitlistId}/entries/${id}`, {
            method: 'DELETE',
          });
        }
      }
      
      setSelectedEntries([]);
      onRefresh();
    } catch (err) {
      console.error(`Error performing bulk ${action}:`, err);
      alert(`Failed to ${action} entries`);
    }
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'invited':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="relative w-full md:w-64 mb-4 md:mb-0">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search subscribers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        {selectedEntries.length > 0 && (
          <div className="flex space-x-2">
            <button
              onClick={() => handleBulkAction('approve')}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <FiCheck className="mr-2" />
              Approve ({selectedEntries.length})
            </button>
            
            <button
              onClick={() => handleBulkAction('reject')}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <FiX className="mr-2" />
              Reject ({selectedEntries.length})
            </button>
            
            <button
              onClick={() => handleBulkAction('delete')}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiTrash2 className="mr-2" />
              Delete ({selectedEntries.length})
            </button>
          </div>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedEntries.length === currentEntries.length && currentEntries.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('position')}
              >
                <div className="flex items-center">
                  <span>Position</span>
                  {sortField === 'position' && (
                    sortDirection === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('email')}
              >
                <div className="flex items-center">
                  <span>Email</span>
                  {sortField === 'email' && (
                    sortDirection === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  <span>Name</span>
                  {sortField === 'name' && (
                    sortDirection === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('referralCount')}
              >
                <div className="flex items-center">
                  <span>Referrals</span>
                  {sortField === 'referralCount' && (
                    sortDirection === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  <span>Status</span>
                  {sortField === 'status' && (
                    sortDirection === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('createdAt')}
              >
                <div className="flex items-center">
                  <span>Joined</span>
                  {sortField === 'createdAt' && (
                    sortDirection === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentEntries.length > 0 ? (
              currentEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedEntries.includes(entry.id)}
                      onChange={() => handleSelectEntry(entry.id)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{entry.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{entry.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{entry.name || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{entry.referralCount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(entry.status)}`}>
                      {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleApprove(entry.id)}
                        className="text-green-600 hover:text-green-900"
                        title="Approve"
                      >
                        <FiCheck />
                      </button>
                      <button
                        onClick={() => handleReject(entry.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Reject"
                      >
                        <FiX />
                      </button>
                      <button
                        onClick={() => alert(`Email ${entry.email}`)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Email"
                      >
                        <FiMail />
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="text-gray-600 hover:text-gray-900"
                        title="Delete"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                  {searchTerm ? 'No results found' : 'No subscribers yet'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstEntry + 1}</span> to{' '}
            <span className="font-medium">
              {Math.min(indexOfLastEntry, sortedEntries.length)}
            </span>{' '}
            of <span className="font-medium">{sortedEntries.length}</span> results
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
