export class BasePage {

    #basePageSelectors = {
        menuContainers: (() => cy.get('.oxd-main-menu-item--name')),
    }

    navigateToSectionFromMenu(pageName) {
        this.#basePageSelectors.menuContainers().contains(pageName).click();
    }

    navigateTo(urlName) {
        cy.visit(`${urlName}`);
    }

    verifyThatUserHasBeenNavigatedTo(endpoint) {
        cy.url().should("include", endpoint);
    }
}
