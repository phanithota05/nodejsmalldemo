// import React from 'react';
// import PasswordGenerator from './components/PasswordGenerator';
// import PasswordChecker from './components/PasswordChecker';

// function App() {
//     return (
//         <div className="grid grid-cols-2 gap-4 p-8 min-h-screen bg-gray-100">
//             <PasswordGenerator />
//             <PasswordChecker />
//         </div>
//     );
// }

// export default App;


import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordChecker from './components/PasswordChecker';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-4xl w-full p-8 bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
                <PasswordGenerator />
                <PasswordChecker />
            </div>
        </div>
    );
}

export default App;
