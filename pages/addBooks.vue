<template>
  <div class="addBooks">
    <div class="container">
      <div class="text-center mt-4">
        <h3>Add Books</h3>
      </div>
      <form>
        <div class="d-flex flex-row justify-content-center">
          <div class="bookItems">
            <ul class="list-unstyled">
              <li>Cover Image: {{ cname }} <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" /> </li>
              <li>Name: {{ name }} <input type="text" name="" id="" /> </li>
              <li>Description: {{ description }} <textarea name="description" id="" cols="30" rows="5"></textarea> </li>
              <li>Author {{ author }}: <input type="text" name="" id="" /> </li>
              <li>Avaliability: {{avaliability}} <input type="radio" name="available" value="yes">
                <label for="yes">Yes</label>
                <input type="radio" name="available" value="no">
                <label for="no">No</label>
              <li>List of Cities:
                {{lcities}}
                <select name="stateList">
                  <option value="disable" disabled>---Select the states---</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Orissa">Orissa</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttaranchal">Uttaranchal</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </li>
            </ul>
            <div class="col-12 text-center">
              <button class="btn btn-info">Submit</button>
            </div>
            <div class="link text-center mt-5">
              <n-link to="/listOfBooks"> Go to the List of Books </n-link>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </template>

<script>
export default {

}
</script>

<style>
body{
    background: linear-gradient(#e3fdf5,#ffe6fa);
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    min-height: 100vh;
    padding: 30px 0;
}
.bookItems li {
  margin: 30px 0;
}
.bookItems input, .bookItems textarea {
  outline: none;
}
.bookItems input:focus, .bookItems textarea:focus{
  border: 1px solid #17a2b8;
}
.link a{
  color: #212529;
  text-decoration: none;
}
.link a:hover {
  color: #17a2b8;
}
</style>
