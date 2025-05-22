import React from 'react';
import { getInitials } from "../../utils/helper"; // Ensure this path is correct

const ProfileInfo = ({ userInfo, onLogout }) => {
    if (!userInfo) {
        return null; // Handle case when userInfo is null or undefined
    }

    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
                {/* Display initials */}
                <span className="text-xs font-semibold text-gray-800">
                    {getInitials(userInfo?.fullName || "User")}
                </span>
            </div>
            <div>
                <p className="text-sm text-slate-700 underline">
                    {userInfo.fullName || "Unknown User"}
                </p>
                <button
                    className="text-xs text-primary underline hover:no-underline"
                    onClick={onLogout || (() => {})}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
