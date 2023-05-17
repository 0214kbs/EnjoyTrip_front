<template>
  <section>
    <div class="container py-5" style="margin-top: 30px">
      <h4>회원정보 수정</h4>
      <hr />
      <form>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="inputName"
                  class="form-control"
                  style="color: black"
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  name="email"
                  id="inputEmail"
                  class="form-control"
                  style="color: black"
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  name="address"
                  id="inputAddress"
                  class="form-control"
                  style="color: black"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <div style="border: 1px; margin: auto; text-align: center">
        <button id="btnUpdate" class="btn btn-lg btn-primary hover-top">수정</button>
        <button id="btnDelete" class="btn btn-lg btn-primary hover-top">탈퇴</button>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped></style>
