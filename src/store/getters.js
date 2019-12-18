const getters = {
    styles: state => state.styles,
        storeName: state => state.styles.storeName,
        themeColor: state => state.styles.themeColor,
        priColor: state => state.styles.priColor,
        secColor: state => state.styles.secColor,
        priFont: state => state.styles.priFont,
        secFont: state => state.styles.secFont,
        navShow: state => state.styles.navShow,
        navLayout: state => state.styles.navLayout,
        navType: state => state.styles.navType,
        navLogoImg: state => state.styles.navLogoImg,
        navLogo: state => state.styles.navLogo,
        navLogoTextColor: state => state.styles.navLogoTextColor,
        navLogoTextSize: state => state.styles.navLogoTextSize,
        heroShow: state => state.styles.heroShow,
        heroLayout: state => state.styles.heroLayout,
        heroHeight: state => state.styles.heroHeight,
        heroBgImgShow: state => state.styles.heroBgImgShow,
        heroBgImg: state => state.styles.heroBgImg,
        heroColor: state => state.styles.heroColor,
        heroTitle: state => state.styles.heroTitle,
        heroTitleColor: state => state.styles.heroTitleColor,
        heroContent: state => state.styles.heroContent,
        heroContentColor: state => state.styles.heroContentColor,
        heroCTA: state => state.styles.heroCTA,
        heroCTALink: state => state.styles.heroCTALink,
        heroImage: state => state.styles.heroImage,
        heroImageShow: state => state.styles.heroImageShow,
        heroBtnPri: state => state.styles.heroBtnPri,
        heroBtnSec: state => state.styles.heroBtnSec,
        collectionShow: state => state.styles.collectionShow,
        collectionLayout: state => state.styles.collectionLayout,
        collectionBtnColor: state => state.styles.collectionBtnColor,
        collectionOneShow: state => state.styles.collectionOneShow,
        collectionOneBg: state => state.styles.collectionOneBg,
        collectionOneTitle: state => state.styles.collectionOneTitle,
        collectionOneSubtitle: state => state.styles.collectionOneSubtitle,
        collectionOneImg: state => state.styles.collectionOneImg,
        collectionOneBtn: state => state.styles.collectionOneBtn,
        collectionOneLink: state => state.styles.collectionOneLink,
        collectionTwoShow: state => state.styles.collectionTwoShow,
        collectionTwoBg: state => state.styles.collectionTwoBg,
        collectionTwoTitle: state => state.styles.collectionTwoTitle,
        collectionTwoSubtitle: state => state.styles.collectionTwoSubtitle,
        collectionTwoImg: state => state.styles.collectionTwoImg,
        collectionTwoBtn: state => state.styles.collectionTwoBtn,
        collectionTwoLink: state => state.styles.collectionTwoLink,
        collectionThreeShow: state => state.styles.collectionThreeShow,
        collectionThreeBg: state => state.styles.collectionThreeBg,
        collectionThreeTitle: state => state.styles.collectionThreeTitle,
        collectionThreeSubtitle: state => state.styles.collectionThreeSubtitle,
        collectionThreeImg: state => state.styles.collectionThreeImg,
        collectionThreeBtn: state => state.styles.collectionThreeBtn,
        collectionThreeLink: state => state.styles.collectionThreeLink,
        productTitleShow: state => state.styles.productTitleShow,
        productTitleLayout: state => state.styles.productTitleLayout,
        productTitleBgColor: state => state.styles.productTitleBgColor,
        productTitleMain: state => state.styles.productTitleMain,
        productTitleMainColor: state => state.styles.productTitleMainColor,
        productTitleSub: state => state.styles.productTitleSub,
        productTitleSubColor: state => state.styles.productTitleSubColor,
        productShow: state => state.styles.productShow,
        productLayout: state => state.styles.productLayout,
        productBg: state => state.styles.productBg,
        notificationShow: state => state.styles.notificationShow,
        notificationLayout: state => state.styles.notificationLayout,
        notificationPri: state => state.styles.notificationPri,
        notificationSec: state => state.styles.notificationSec,
        notificationTitle: state => state.styles.notificationTitle,
        notificationContent: state => state.styles.notificationContent,
        notificationButton: state => state.styles.notificationButton,
        notificationButtonPri: state => state.styles.notificationButtonPri,
        notificationButtonSec: state => state.styles.notificationButtonSec,
        newsletterShow: state => state.styles.newsletterShow,
        newsletterLayout: state => state.styles.newsletterLayout,
        footerShow: state => state.styles.footerShow,
        footerLayout: state => state.styles.footerLayout,
        subfooterShow: state => state.styles.subfooterShow,
        subfooterLayout: state => state.styles.subfooterLayout
};

export default getters;