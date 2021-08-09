<template>
  <div class="footer mt-16 pt-16">
    <v-container class="pb-10">
      <v-row>
        <v-col>
          <div class="footer-email">
            <v-img
              max-height="150"
              max-width="225"
              class="mb-4"
              src="../../assets/img/logo.png"
            >
            </v-img
            ><br />
            <div class="mb-4">
              <v-icon class="mr-3"> mdi-earth </v-icon>
              <span>English (United States)</span>
            </div>
            <div class="mb-4">
              <v-icon class="mr-3"> mdi-email-outline </v-icon>
              <span class="email">ask@defiforyou.uk</span>
            </div>
            <div class="mb-4">
              <v-icon class="mr-3"> mdi-email-outline </v-icon>
              <span class="email">support@defiforyou.uk</span>
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="footer-office">
            <span class="office-name mb-8"> DeFi For You — Hanoi Office </span>
            <div class="phone mb-4">+84 9643 66605</div>
            <div class="phone mb-4">+84 9644 41735</div>
            <span class="address mb-12"
              >BT NQ 25-15 Vinhomes Riverside, Long Bien, Hanoi, Vietnam</span
            >
            <span class="office-name mb-8"> DeFi For You — London Office </span>
            <div class="phone mb-4">
              <span>+84 9644 41735 </span>
              <span> Sean Mason - Business CFO</span>
            </div>
            <span class="address mb-4">
              Office 32 19-21 Crawford Street, London, United Kingdom, W1H 1PJ
            </span>
            <div class="mb-4">
              Registration Number: <span class="regis-number">13126050</span>
            </div>
            <div class="view-companyhome">
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/13126050?fbclid=IwAR3Fm3QHdllfP_z1QIZ9e9UX-warFarV1XuwBqsxXyPl0M3k-BLSvkNdXuE"
                target="_blank"
              >
                View on Companies House ->
              </a>
            </div>
          </div>
        </v-col>
        <v-col>
          <div class="find-us">
            <span class="title-social mb-8">Find us on</span>
            <div class="list-social">
              <a href="https://github.com/defi-vn/" target="_blank">
                <v-icon class="mr-4"> mdi-github </v-icon>
              </a>
              <a href="https://t.me/DeFiForYou_English" target="_blank">
                <v-icon class="mr-4"> mdi-telegram </v-icon>
              </a>
              <a href="https://www.facebook.com/DeFiForYouDFY" target="_blank">
                <v-icon class="mr-4"> mdi-facebook </v-icon>
              </a>
              <a
                href="https://www.youtube.com/channel/UCGaSCU17Zo_2CzJNaBeUHaA/featured"
                target="_blank"
              >
                <v-icon class="mr-4"> mdi-youtube </v-icon>
              </a>
              <a
                href="https://www.linkedin.com/company/defiforyou"
                target="_blank"
              >
                <v-icon class="mr-4"> mdi-linkedin </v-icon>
              </a>
              <a href="https://twitter.com/Defiforyou" target="_blank">
                <v-icon class="mr-4"> mdi-twitter </v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="copyright">
      <v-container>
        <v-row>
          <v-col>
            <div class="text-left">
              © 2021 DeFi For You. All rights reserved.
            </div>
          </v-col>
          <v-col>
            <div class="text-right policy">
              <span>Terms of Service</span>
              <span class="ml-8">Privacy Policy</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.footer {
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 25px 0px !important;
  font-size: 14px;
  .footer-email {
    display: flex;
    flex-direction: column;
    .email {
      color: #dba83d;
    }
  }
  .footer-office {
    display: flex;
    flex-direction: column;
    .office-name {
      font-weight: 700;
    }
    .phone {
      color: #f8b017;
    }
    .regis-number {
      font-weight: 700;
      color: #9fa6b2;
    }
    .view-companyhome a {
      color: #f8b017;
      text-decoration: none;
    }
  }
  .find-us {
    display: flex;
    flex-direction: column;
    .title-social {
      font-weight: 700;
    }
    .list-social a {
      text-decoration: none;
    }
  }
}
.copyright {
  display: flex;
  height: 85px;
  align-items: center;
  background: #bdd5ec;
}
</style>
