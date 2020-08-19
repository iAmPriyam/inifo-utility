const validationMessages = {
    error: {
        common: "Something went wrong.",
        otpIncorrect: "Please enter valid OTP",
        badRequest: "Bad Request data",
        noInternet: "Please check your internet connection.",
    },
};
export const PASSWORD_MATCH_ERROR = "Passwords do not match!";
export const CONFIRM_USER_DELETE = "Are you sure you want to remove this user?";
export const STRONG_PWD_REGEXP = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,16}$/;
export const STRONG_EMAIL_REGEXP = /^\w+([\.-]?\w+)@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const PHONE_PATTERN = /^[6-9]\d{9}$/;
export const password = {
    strong: `Your password should contain:\n -At least 6 and max 15 characters \n -At least one upper and one lower-case letters \n -At least one numeral \n -At least one special character \n -Should not contain frequently used words like your name`,
};
export default validationMessages;

const validationMsg = {
    EN: {
        required(field) {
            return `Please enter ${field}`;
        },
        requiredSelect(field) {
            return `Please select ${field}`;
        },
        minMax(field, min, max) {
            return `${field} must be between ${min} to ${max} characters`;
        },
        maxLength(field, char) {
            return `${field} must be less than or equal to ${char} characters long`;
        },
        valueRange(field, min, max) {
            return `Please enter ${field} between ${min} to ${max}`;
        },
        number(field) {
            return `${field} must be numbers`;
        },
        valid(field) {
            return `Please enter valid ${field}`;
        },
        strongPassword(field) {
            return `Your password should contain:\n -At least 6 and max 15 characters \n -At least one upper and one lower-case letters \n -At least one numeral \n -At least one special character \n -Should not contain frequently used words like your name`;
        },
    },
    HI: {
        required(field) {
            return `कृपया ${field} दर्ज करें`;
        },
        requiredSelect(field) {
            return `कृपया ${field} का चयन करें`;
        },
        minMax(field, min, max) {
            return `${field} ${min} से ${max} वर्णों के बीच होना चाहिए`;
        },
        maxLength(field, char) {
            return `${field} ${char} वर्णों से कम या बराबर होना चाहिए`;
        },
        valueRange(field, min, max) {
            return `कृपया ${min} से ${max} के बीच ${field} दर्ज करें`;
        },
        number(field) {
            return `${field} संख्या होनी चाहिए`;
        },
        valid(field) {
            return `कृपया मान्य ${field} दर्ज करें`;
        },
        strongPassword(field) {
            return `आपके पासवर्ड में शामिल होना चाहिए: \n - कम से कम 6 और अधिकतम 15 वर्ण \n -कम से कम एक ऊपरी और एक निचला केस अक्षर \n -कम से कम एक अंक \n -कम से कम एक विशेष वर्ण \n -आपके नाम की तरह अक्सर इस्तेमाल किए जाने वाले शब्द नहीं होने चाहिए`;
        },
    },
    MA: {
        required(field) {
            return `कृपया ${field} प्रविष्ट करा`;
        },
        requiredSelect(field) {
            return `कृपया ${field} निवडा`;
        },
        minMax(field, min, max) {
            return `${field} ${min} ते ${max} वर्णांमधील असणे आवश्यक आहे`;
        },
        maxLength(field, char) {
            return `${field} ${char} वर्णांपेक्षा कमी किंवा त्यासारखे असणे आवश्यक आहे`;
        },
        valueRange(field, min, max) {
            return `कृपया ${min} से ${max} दरम्यान ${field} प्रविष्ट करा`;
        },
        number(field) {
            return `${field} संख्या असणे आवश्यक आहे`;
        },
        valid(field) {
            return `कृपया वैध ${field} प्रविष्ट करा`;
        },
        strongPassword(field) {
            return `आपल्या संकेतशब्दामध्ये हे असावे: \n -किमान 6 आणि जास्तीत जास्त 15 वर्ण \n -किमान एक अपर आणि एक लोअर-केस अक्षरे \n -किमान एक अंक \n -किमान एक विशेष वर्ण \n -आपल्या नावासारखे वारंवार वापरले जाणारे शब्द नसावेत`;
        },
    },
};
export function genErrorMessage(field, errType, min, max) {
    const lan = localStorage.getItem("lan");
    if (lan && errType && field) {
        if (min && max && (errType === "minMax" || errType === "valueRange")) {
            return validationMsg[lan][errType](field, min, max);
        } else {
            return validationMsg[lan][errType](field);
        }
    }
}
