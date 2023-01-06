const React = require('react')
const Default = require('./layouts/Default')

function Edit ({bread, index}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
            defaultValue={bread.image}
            <label htmlFor="baker">Baker</label>
<select name="baker" id="baker" defaultValue={bread.baker}>
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
            defaultChecked={bread.hasGluten}
          />
          <br />
          <input type="submit"/>
          <a href={`/breads/${index}/edit`}><button>Edit</button></a>

        </form>
      </Default>
    )
}

module.exports = Edit
