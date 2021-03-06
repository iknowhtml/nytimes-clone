// Define at the top of the spec file or just import it
const terminalLog = violations => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.lenth === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task('table', violationData);
};

describe('Home', () => {
  it('should be accessible', () => {
    cy.visit('localhost:8080');
    cy.injectAxe();
    cy.checkA11y(null, null, terminalLog);
  });
});
