import CryptoJS from 'crypto-js';

const Config = {
    key: process.env.NEXT_PUBLIC_PWD_ENCRYPTION_KEY || '',
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
}

export const PasswordUtils = {
    encrypt,
    decrypt
}

function getKey(){
    return CryptoJS.SHA256(Config.key)
}

function encrypt (plainText: string) {
    const key = getKey();

    const encrypted = CryptoJS.AES.encrypt(plainText, getKey(), {
        iv: CryptoJS.enc.Utf8.parse(String(key).substring(0,16)),
        mode: Config.mode,
        padding: Config.padding,
    });
  return encrypted.toString();
}

function decrypt(encryptedText: string){
    // if(isNullOrWhiteSpace(encryptedText)) return '';
    const key = getKey();

    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        iv: CryptoJS.enc.Utf8.parse(String(key).substring(0,16)),
        mode: Config.mode,
        padding: Config.padding
    });
    return decrypted.toString(CryptoJS.enc.Utf8)
}