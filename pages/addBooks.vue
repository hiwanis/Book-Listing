<template>
  <div id="addBooks">
    <div class="container">
      <div class="text-center mt-4">
        <h3>Add Books</h3>
      </div>
      <form>
        <div class="d-flex flex-row justify-content-center">
          <div class="bookItems">
            <ul class="list-unstyled">
              <!-- <div class="book-cover">
                <li>Cover Image: 
                  <input type="file" 
                  name="myImage" 
                  accept="image/x-png,image/gif,image/jpeg" />
                </li>
              </div> -->
                <li>Name: {{ name }}
                  <input v-model="name" type="text" /> 
                </li>
                <li>Description: {{ description }}
                  <textarea v-model="description" name="description" id="" cols="30" rows="5"></textarea> 
                </li>
                <li >Author : {{ author }} <input v-model="author" type="text" name="" id="" /> </li>
                <li>Avaliability: {{ detail }}<input type="radio" name="available" value="yes" v-model="detail"> Yes
                  <input type="radio" name="available" value="no" v-model="detail"> No
                </li>
                <li>List of Cities: {{ selected }}
                  <v-select multiple v-model="selected" :options="['Andaman and Nicobar Islands','Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttranchal', 'Uttar Pradesh', 'West Bengal']" />
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
  // var firstPage= new Vue({
  //   el: 'addBooks',
  //   data: {
  //     name: '',
  //     description: '',
  //     author: '',
  //     detail: '',
  //     selected: '',
  //   }
  // })
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
    padding-bottom: 30px;
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
