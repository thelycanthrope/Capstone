import React from 'react'
import { toast } from 'react-toastify'


function SignOut() {
    return (
        <div>
            {toast.success('Signedout successfully')}
        </div>
    )
}

export default SignOut
