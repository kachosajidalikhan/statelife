import { Plus } from 'lucide-react';
import ProfileSidebar from "./ProfileSidebar"
import ProfilepageIMG from  "../assets/images/profilepageIMG.png"
import { useNavigate } from "react-router-dom";


export default function BuyerSellerProfile({ userType = 'seller' }) {
  const nav = useNavigate();
  return (<>
  <div className='flex w-full h-full'>

      <ProfileSidebar/>
  
    <div className="min-h-screen bg-gray-50 w-full flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <p>If userType is seller then the Post Ad button will show on bottom as shown in figure</p>
        <h1 className="text-2xl font-semibold text-gray-700 mb-8">
          No Activity Is Here
        </h1>

        <div className="relative mb-8">
          
          {/* Person illustration */}
          <div className="max-w-[25rem] mx-auto">
            <img
              src={ProfilepageIMG}
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Post Ad Button - Only shown for sellers */}
        {userType === 'seller' && (
          <button onClick={()=>{ nav("/brokerpostad")}} className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-md px-4 py-2 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Post Ad
          </button>
         )}
      </div>
     
    </div>
    </div>
    </>
  );
}
