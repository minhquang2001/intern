// cypress/integration/home.spec.js
describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('https://localhost:3000') // Thay đổi thành URL của trang chủ của ứng dụng Nuxt.js
        cy.contains('Welcome to Your Nuxt.js App') // Đảm bảo trang chủ có nội dung "Welcome to Your Nuxt.js App"
    })
})
