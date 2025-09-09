<template>
  <header class="wrapper bg-light">
    <nav class="navbar navbar-expand-lg classic transparent navbar-light">
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <NuxtLink to="/">
            <img src="/logo-dark.png" srcset="/logo-dark@2x.png 2x" alt="Digital Agency" />
          </NuxtLink>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">Digital Agency</h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <li class="nav-item dropdown dropdown-mega">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                <ul class="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li class="mega-menu-content mega-menu-scroll">
                    <ul class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                      <li v-for="n in 36" :key="n" class="col">
                        <a class="dropdown-item" :href="`/demo${n}.html`">
                          <figure class="rounded lift d-none d-lg-block">
                            <img :src="`/demos/mi${n}.jpg`" :srcset="`/demos/mi${n}@2x.jpg 2x`" alt="" />
                          </figure>
                          <span class="d-lg-none">Demo {{ n }}</span>
                        </a>
                      </li>
                    </ul>
                    <span class="d-none d-lg-flex"><i class="uil uil-direction"></i><strong>Scroll to view more</strong></span>
                  </li>
                </ul>
              </li>
              <!-- Add other nav items similarly -->
            </ul>
            <div class="offcanvas-footer d-lg-none">
              <div>
                <a href="mailto:info@agency.com">info@agency.com</a>
                <br /> 00 (123) 456 78 90 <br />
                <nav class="nav social social-white mt-4">
                  <a href="#"><Icon name="twitter" /></a>
                  <a href="#"><Icon name="facebook-f" /></a>
                  <a href="#"><Icon name="dribbble" /></a>
                  <a href="#"><Icon name="instagram" /></a>
                  <a href="#"><Icon name="youtube" /></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-other ms-lg-4">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item d-none d-md-block">
              <Button btnClass="btn-sm btn-primary rounded-pill">Contact</Button>
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn"><span></span></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import Icon from '../common/Icon.vue';
import Button from '../common/Button.vue';
</script>