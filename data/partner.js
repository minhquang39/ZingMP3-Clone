const partners = [
  "./assest/image/partner/pic1.png",
  "./assest/image/partner/pic2.png",
  "./assest/image/partner/pic3.png",
  "./assest/image/partner/pic4.png",
  "./assest/image/partner/pic5.png",
  "./assest/image/partner/pic6.png",
  "./assest/image/partner/pic7.png",
  "./assest/image/partner/pic8.png",
  "./assest/image/partner/pic9.png",
  "./assest/image/partner/pic10.png",
  "./assest/image/partner/pic11.png",
  "./assest/image/partner/pic12.png",
  "./assest/image/partner/pic13.png",
  "./assest/image/partner/pic14.png",
  "./assest/image/partner/pic15.png",
  "./assest/image/partner/pic16.png",
];
const PARTNER_STORAGE = "ZM_PARTNER";
localStorage.setItem(PARTNER_STORAGE, JSON.stringify(partners));

localStorage.getItem(PARTNER_STORAGE);
