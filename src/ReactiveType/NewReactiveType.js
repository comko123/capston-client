import { useMediaQuery } from 'react-responsive';
export  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992})
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isDesktop ? 
    children : isTablet? 
    children:isMobile? 
    children:isNotMobile?
    children:null
  }

  export default function NewReactiveType({children}){
      return(<div>
            <Desktop>{children}</Desktop>    
      </div>)

  } 
