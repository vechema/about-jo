# About Jo
[A website made by Jo about Jo for Jo](https://aboutjo.gtsb.io/)
[Gatsby Deploys](www.gatsbyjs.com)
[GitHub Repo](https://github.com/vechema/about-jo)

## To Run
`gatsby develop`

localhost:8000
http://localhost:8000/__graphql

## TODO
* About
  * Jo Egner, software engineer, hotel art vs mona lisa if I can make it not sound terrible
  * Site uses Gatsby so GraphQL & React
  * Hobbies - coding, baking, video games, knit & crochet
* Practical
  * Better description for WeInfuse
  * Update skills based on WeInfuse
  * Needs some serious style - don't go all the way to the edge, color, spacing
  * Refactor - not to much copy + paste w/ Typography. Keep styling in mind
* Theoretical
  * Next steps
    * Write/create placeholders for all current ideas
    * Change theoretical index to make a graphql query & organize content that way
    * Links from theoretical also decided by mdxs
  * side nav
    * big screen
      * doesn't overlap with screen content
    * small screen
      * minimized w/ just icons showing by default
      * Temporary drawer - darkens background when opened
  * Landing page - NFRs? Accordian of most bare bones philosophies?
* Fix all the typescript warnings
* Dark/light theme!
* Add page for killer sudoku solver
 * Suggestions for box combinations - and keep track of which ones crossed out
  * Freeform suggestion - but in any number & amount of cells to see suggestions
 * Sum highlighted boxes
  * Add/substract increments of 45 from aggregations
 * Show errors - ideally after a bit of a delay or single key stroke toggle
  * Not possible w/ currently displayed numbers error
  * Not the actual answer error
 * Cell can hold options and can check that answer is in those options (show errors)
  * Key to remove numbers that are not possible from options due to placed big numbers
  * Mark a number NOT an option
 * Trial/testing mode - going to add things as a test and reset to a certain, specified point after
 * Next move suggestion/hint and why
 * Format to export & import existing sudokus
