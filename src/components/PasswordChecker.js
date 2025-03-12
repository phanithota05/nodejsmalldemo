// import React, { useState } from 'react';
// import { checkPasswordStrength } from '../utils/passwordUtils';
// import { motion } from 'framer-motion';

// const PasswordChecker = () => {
//     const [inputPassword, setInputPassword] = useState('');
//     const [strength, setStrength] = useState('');

//     const handleCheckStrength = () => {
//         setStrength(checkPasswordStrength(inputPassword) ? 'Strong' : 'Weak');
//     };

//     return (
//         <div className="p-4 shadow-xl bg-white rounded-2xl">
//             <h2 className="text-xl font-bold mb-4">Password Strength Checker</h2>
//             <input
//                 type="text"
//                 placeholder="Enter password to check..."
//                 value={inputPassword}
//                 onChange={(e) => setInputPassword(e.target.value)}
//                 className="p-2 border rounded-md w-full mb-4"
//             />
//             <button
//                 onClick={handleCheckStrength}
//                 className="bg-green-500 text-white px-4 py-2 rounded-xl w-full mb-4"
//             >
//                 Check Strength
//             </button>
//             {strength && (
//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className={`text-lg font-bold ${strength === 'Strong' ? 'text-green-600' : 'text-red-600'}`}
//                 >
//                     {strength}
//                 </motion.p>
//             )}
//         </div>
//     );
// };

// export default PasswordChecker;


import React, { useState } from 'react';
import { checkPasswordStrength } from '../utils/passwordUtils';
import { motion } from 'framer-motion';

const PasswordChecker = () => {
    const [inputPassword, setInputPassword] = useState('');
    const [strength, setStrength] = useState('');

    const handleCheckStrength = () => {
        setStrength(checkPasswordStrength(inputPassword) ? 'Strong' : 'Weak');
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Password Strength Checker</h2>
            <input
                type="text"
                placeholder="Enter password to check..."
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className="p-4 w-full text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
                onClick={handleCheckStrength}
                className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition duration-300"
            >
                Check Strength
            </button>
            {strength && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mt-4 text-lg font-semibold ${
                        strength === 'Strong' ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    {strength}
                </motion.p>
            )}
        </div>
    );
};

export default PasswordChecker;
