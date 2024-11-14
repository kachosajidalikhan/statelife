import { HelpCircle, LogOut, MessageCircle, User, ShoppingBag, BookmarkIcon, Megaphone } from "lucide-react";
import Profileimage from "../assets/images/profileimage.jpg"
export default function ProfileSidebar({ userType = 'buyer' }) {
  return (
    <div className="w-80 bg-[#B6CAE6] min-h-screen flex flex-col rounded-r-xl">
      {/* Profile Section */}
      <div className="p-4 flex items-center gap-3">
        <div className=" w-[4rem] h-[4rem] relative overflow-hidden rounded-full">
          <img
            src={Profileimage}
            alt="Profile"
          />
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-900">Muhammad Aun</h2>
          <p className="text-xs text-gray-600">{userType === "seller" ? "Seller" : "Buyer"}</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="space-y-1 font-bold">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <User className="h-4 w-4" />
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <MessageCircle className="h-4 w-4" />
              Chats
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <HelpCircle className="h-4 w-4" />
              FAQ's
            </a>
          </li>
         
          {userType === 'seller' ?(
            <>

            <li>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
            <ShoppingBag className="h-4 w-4" />
            Previous Sell
          </a>
        </li>
        <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
          >
          <ShoppingBag className="h-4 w-4" />
          Ad
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
          >
          <ShoppingBag className="h-4 w-4" />
          Plans
        </a>
      </li>
            </>
        ):(
          <>
           <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <ShoppingBag className="h-4 w-4" />
              Previous Buy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <BookmarkIcon className="h-4 w-4" />
              Saved
            </a>
          </li>
          
          </>

        )
          }

          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Support Section */}
      <div className="p-4">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <HelpCircle className="h-4 w-4" />
          <span className="text-lg font-black">Support</span>
        </a>
      </div>
    </div>
  );
}
