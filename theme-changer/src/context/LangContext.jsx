import { createContext, useState } from  "react";

const LangEnums = {
    english: 'en',
    hindi: 'hi',
    gujrati: 'gj'
}

const LangContext = createContext();

const LangProvider = ({children})=>{
    const [lang, setLang] = useState(LangEnums.english);

    const changeLang = (lang)=>{
        setLang(lang)
    }

    return <LangContext.Provider value={{lang, changeLang}}>
        {children}
    </LangContext.Provider>
}

export {LangContext, LangProvider, LangEnums}