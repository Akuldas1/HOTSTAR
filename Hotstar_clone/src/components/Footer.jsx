import { FaFacebook, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <>
            <div class="grid grid-cols-4 gap-4 text-white">
             <div>Company</div>
             <div>View Website in</div>
             <div>Need Help?</div>
             <div>Connect with us</div>
             <div>About Us</div>
             <div>English</div>
             <div>Visit Help Center</div>
             <div className="flex gap-4">
            <FaFacebook/>
            <FaTwitter/>
             </div>
            </div>
            <div class="grid grid-cols-4 gap-4 text-white">
            <div>Carrers</div>
            <div></div>
             <div>Share feed back</div>
             </div>
        </>
    )
}

export default Footer
//    <div class="row text-white">
//     <div class="col-span-4">
//         <p>Company</p>
//         <p>View Website in</p>
//         <p>Need Help?</p>
//         <p>Connect with us</p>
//     </div>
//    </div>