import { FaFacebook, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <>
            <div className="relative left-28">
                <div class="grid grid-cols-4 gap-4 text-white ">
                    <div className="font-body font-semibold text-blue-100 ">Company</div>
                    <div className="font-body font-semibold text-blue-100 ">View Website in</div>
                    <div className="font-body font-semibold text-blue-100 ">Need Help?</div>
                    <div className="font-body font-semibold text-blue-100 ">Connect with us</div>
                    <div className="font-body  text-blue-gray-custom" >About Us</div>
                    <div className="font-body  text-blue-gray-custom">English</div>
                    <div className="font-body text-blue-gray-custom">Visit Help Center</div>
                    <div className="flex gap-4">
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-4 text-white">
                    <div className="font-body  text-blue-gray-custom"> Carrers</div>
                    <div></div>
                    <div className="font-body  text-blue-gray-custom">Share feed back</div>
                </div>

                <div>
                    <br></br>
                <div className="font-body text-blue-gray-custom flex flex-col justify-between">© 2023 STAR. All Rights Reserved.</div>
                    <ul className="font-body text-blue-gray-custom flex gap-2">
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                    </ul>
                    <div className="flex relative bottom-11 left-2/3 ">
                        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" className="h-10"/>
                        <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" className="h-10"/>
                    </div>
                </div>
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