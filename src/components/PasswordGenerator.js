// import React, { useState } from 'react';
// import { generatePassword } from '../utils/passwordUtils';

// const PasswordGenerator = () => {
//     const [generatedPassword, setGeneratedPassword] = useState('');

//     const handleGeneratePassword = () => {
//         setGeneratedPassword(generatePassword());
//     };

//     return (
//         <div className="p-4 shadow-xl bg-white rounded-2xl">
//             <h2 className="text-xl font-bold mb-4">Password Generator</h2>
//             <p className="mb-4"><strong>{generatedPassword}</strong></p>
//             <button
//                 onClick={handleGeneratePassword}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full"
//             >
//                 Generate Password
//             </button>
//         </div>
//     );
// };

// export default PasswordGenerator;


import React, { useState } from 'react';
import { generatePassword } from '../utils/passwordUtils';

const PasswordGenerator = () => {
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleGeneratePassword = () => {
        setGeneratedPassword(generatePassword());
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Password Generator</h2>
            <div className="text-center mb-6">
                <p className="text-lg font-bold text-purple-500">{generatedPassword || 'Your password will appear here.'}</p>
            </div>
            <button
                onClick={handleGeneratePassword}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
            >
                Generate Password
            </button>
        </div>
    );
};

export default PasswordGenerator;
