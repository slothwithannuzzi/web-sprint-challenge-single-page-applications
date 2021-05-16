describe('Pizza App', () => {
    const sizeSelect = () => cy.get('[name="size"]')
    const sauceSelect = () => cy.get('[name="sauce"]')
    const pepperoni = () => cy.get('[name ="pepperoni"]')
    const glutenFree = () => cy.get('[name="glutenFree"]')
    const nameInput = () => cy.get('[name="name"]')
    const instructionInput = () => cy.get('[name="instructions"]')

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('renders properly', () => {
        sizeSelect().should('exist')
        sauceSelect().should('exist')
        pepperoni().should('exist')
        glutenFree().should('exist')
        nameInput().should('exist')
        instructionInput().should('exist')
    })
})