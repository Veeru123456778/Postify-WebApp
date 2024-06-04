import { useContext } from 'react';
import UserContext from '../context/userContext';

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  flex flex-col items-center py-10 justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl p-6">
       
        <div className="flex items-center mb-6">
          {user && user.profile_picture && (
            <img
              src={user.profile_picture}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          )}
          <div className="ml-6">
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button className="ml-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 px-6 rounded-full shadow-lg hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition duration-300">
            Edit Profile
          </button>
        </div>
        
        
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">More Information</h2>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Bio:</strong> {user.bio || 'Add a description about yourself'}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Location:</strong> {user.location || 'Add your location'}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Interests:</strong> {user.interests || 'Add your interests'}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {user.posts && user.posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={post.image_url}
                alt={`Post ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
