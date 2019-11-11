<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex flex-row bd-highlight pt-5">
        <div class="text-left bd-highlight col-4">  <ul class="unstyled-li">
            <li>Pricing</li>
            <li>Free Search</li>
            <li>More links</li>
          </ul></div>
        <div class="text-left bd-highlight col-4">
          <ul class="unstyled-li">
            <li>About</li>
            <li>Terms &amp; Conditions</li>
            <li>Contact</li>
          </ul>



        </div>
        <div class="text-right bd-highlight col-4">MusicBox © 2019</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  background-color: #dfdfdf;
  color: #000000;
  padding-bottom: 50px;
}

.unstyled-li {
  list-style:none;
}

.footer-logo {
  font-size: 26px;
  color: #000000;

}
</style>
