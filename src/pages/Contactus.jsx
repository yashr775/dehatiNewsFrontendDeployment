import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
    return (
        <div className="bg-gray-600 text-white min-h-screen flex flex-col items-center justify-center p-4 overflow-auto mt-10 sm:mt-0">
            {/* Heading */}
            <div className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                Vision
            </div>

            {/* Content */}
            <div className="max-w-4xl w-full text-base sm:text-lg leading-relaxed text-justify p-4 sm:p-6 rounded-lg shadow-lg bg-black">
                देहात न्यूज में आपका स्वागत है।आपके द्वारा उठाए गए मुद्दे, आपकी सोच और
                चिंता वास्तव में बहुत महत्वपूर्ण हैं। ग्रामीण जीवन में शिक्षा, जल संकट,
                सड़कों का विकास और परिवहन जैसी समस्याएं आम हैं। इन समस्याओं को उजागर
                करने और समाधान खोजने के लिए एक साझा प्रयास की आवश्यकता है। साथ ही कहीं
                ऐसे होनहार हैं उनकी आवाज गांव कस्बा से बाहर नहीं आ पाती है, उनकी आवाज को
                भी साझा प्रयास से समाज और सरकार तक पहुंचाएंगे। आइए मिलकर जागरूकता बढ़ाएं
                और सरकार को कार्रवाई के लिए प्रेरित करें। हमें अपने गांवदेहात और कस्बों
                की आवाज को बुलंद करने के लिए एकजुट होना चाहिए और ठोस समाधान की ओर कदम
                बढ़ाना चाहिए। बदलाव का समय आ गया है, और यह शुरुआत आपसे ही होनी चाहिए।
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-x-6 mt-6">
                <a
                    href="https://x.com/Dehaatnews14923?t=GU4594yz6FZNpwbQF8Q-Kw&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaSquareXTwitter className="text-3xl sm:text-4xl text-white hover:text-black hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=61573410870548&mibextid=wwXIfr&mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-3xl sm:text-4xl  text-white hover:text-black hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                    href="https://youtube.com/@khuntiupdates?si=JJIFZ2OOpTr96_qO"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube className="text-3xl sm:text-4xl  text-white hover:text-black hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:dehaatnews@gmail.com">
                    <MdEmail className="text-3xl sm:text-4xl  text-white hover:text-black hover:scale-110 transition-transform duration-300" />
                </a>
            </div>
        </div>
    );
};

export default Contactus;
