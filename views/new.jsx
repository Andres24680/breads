const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required 
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker">
              <option value="Panos">Panos</option>
              <option value="Jake">Jake</option>
              <option value="Andres">Andres</option>
              <option value="Jason">Jason</option>
              <option value="Diego">Diego</option>
              <option value="Stephen">Stephen</option>
            </select>

          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
        <div className="backButton">
  <a href="/breads"><button>Go back to the index</button></a>
</div>

      </Default>
    )
}

module.exports = New
