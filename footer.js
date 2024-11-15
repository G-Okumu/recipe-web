const FooterLinks = [
    { id: 1, text: 'About Online Food' },
    { id: 2, text: 'Read our blog' },
    { id: 3, text: 'Sign up to deliver' },
    { id: 4, text: 'Add your restaurant' },
    { id: 5, text: 'Get Help' },
    { id: 6, text: 'Ask any question' },
    { id: 7, text: 'Order Now' },
    { id: 8, text: 'Contact' },
    { id: 9, text: 'Facebook' },
    { id: 10, text: 'Instagram' },
    { id: 11, text: 'Twitter' },
    { id: 12, text: 'Youtube' },
];


let first_footer_section = document.getElementById("first-footer-links");
let second_footer_section = document.getElementById("second-footer-links");
let third_footer_section = document.getElementById("third-footer-links");

first_footer_section.innerHTML = `
${FooterLinks.slice(0, 4).map((item) => {
    return `<span class="text-white poppins" key=${item.id}>${item.text}</span>`;
})}
`

second_footer_section.innerHTML = `
${FooterLinks.slice(4, 8).map((item) => {
    return `<span class="text-white poppins" key=${item.id}>${item.text}</span>`;
})}
`

third_footer_section.innerHTML = `
${FooterLinks.slice(8, 12).map((item) => {
    return `<span class="text-white poppins" key=${item.id}>${item.text}</span>`;
})}
`
