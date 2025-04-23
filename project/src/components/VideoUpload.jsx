import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

function VideoUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { user } = useAuth();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    try {
      // Upload video file to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: videoData, error: videoError } = await supabase.storage
        .from('videos')
        .upload(`public/${fileName}`, file);

      if (videoError) throw videoError;

      // Create video record in the database
      const { data, error } = await supabase
        .from('videos')
        .insert([
          {
            title,
            description,
            video_url: videoData.path,
            user_id: user.id,
          },
        ])
        .select();

      if (error) throw error;
      
      setTitle('');
      setDescription('');
      setFile(null);
      alert('Video uploaded successfully!');
    } catch (error) {
      alert('Error uploading video!');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 block w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  );
}