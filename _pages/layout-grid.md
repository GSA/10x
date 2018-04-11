---
layout: prototype
title: 10x
permalink: /layout-grid/
---

<div class="font-mono-f4 font-weight-300">

  <div class="g-container-tablet-plus padding-x-base-plus margin-top-half">
    <h1 class="font-sans-f14">USWDS draft layout grid</h1>
    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><strong class="font-weight-700">Note:</strong> <span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-container</span>, <span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-gap</span>, and <span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-col</span> all have mobile-first responsive variants. Only the first example shows them.</p>
    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-col</span> items flex to fit</p>

    <div class="g-row margin-top-half">
      <div class="g-col-6 tablet-plus:g-col border-pixel border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-6</div>
      </div>
      <div class="g-col-6 tablet-plus:g-col border-pixel border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-6</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col border-pixel border-top-width-0 tablet-plus:border-top-width-pixel tablet-plus:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet-plus:g-col</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col border-pixel border-top-width-0 tablet-plus:border-top-width-pixel border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet-plus:g-col</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col border-pixel border-top-width-0 tablet-plus:border-top-width-pixel border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet-plus:g-col</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col-4</div>
      </div>
    </div><!-- g-row -->

    <div class="g-row margin-top-half">
      <div class="g-col-12 tablet:g-col border-pixel border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet:g-col</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col-12</div>
      </div>
      <div class="g-col-12 tablet:g-col border-pixel border-top-width-0 tablet:border-top-width-pixel tablet:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet:g-col</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col-12</div>
      </div>
      <div class="g-col-12 tablet:g-col border-pixel border-top-width-0 tablet:border-top-width-pixel tablet:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet:g-col</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col-12</div>
      </div>
    </div><!-- g-row -->

    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-col-auto</span> items fit the content and do not flex</p>

    <div class="g-row margin-top-half">
      <div class="g-col-auto border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-auto</div>
      </div>
      <div class="g-col border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col</div>
      </div>
      <div class="g-col border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col</div>
      </div>
      <div class="g-col-auto border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-auto</div>
      </div>
    </div><!-- l.row -->

    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-col-[1-12]</span> set a fixed width of [n] columns in a 12-column grid</p>

    <div class="g-row margin-top-half font-sans-f2">
      <div class="g-col-1 border-x-eighth border-color-black-cool-90">
        <div class="text-align-center padding-x-base">1</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">2</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">3</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">4</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">5</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">6</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">7</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">8</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">9</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">10</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">11</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-half">
      <div class="g-col-1 border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-1</div>
      </div>
      <div class="g-col-2 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-2</div>
      </div>
      <div class="g-col-3 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-3</div>
      </div>
      <div class="g-col-4 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-4</div>
      </div>
      <div class="g-col-2 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-2</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-half">
      <div class="g-col-8 border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-8</div>
      </div>
      <div class="g-col-2 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-2</div>
      </div>
      <div class="g-col-2 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-2</div>
      </div>
    </div><!-- l.row -->

    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.l-offset-[1-12]</span> offsets the column by [n] columns</p>

    <div class="g-row margin-top-half font-sans-f2">
      <div class="g-col-1 border-x-eighth border-color-black-cool-90">
        <div class="text-align-center padding-x-base">1</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">2</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">3</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">4</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">5</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">6</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">7</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">8</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">9</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">10</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">11</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-half">
      <div class="g-col-8 l-offset-4 border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-8.l-offset-4</div>
      </div>
    </div><!-- l.row -->

    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half">Rows wrap when columns add up to more than 12</p>

    <div class="g-row margin-top-half font-sans-f2">
      <div class="g-col-1 border-x-eighth border-color-black-cool-90">
        <div class="text-align-center padding-x-base">1</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">2</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">3</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">4</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">5</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">6</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">7</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">8</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">9</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">10</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">11</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-half">
      <div class="g-col-8 border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-8</div>
      </div>
      <div class="g-col-3 border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-3</div>
      </div>
      <div class="g-col-5 border-pixel border-top-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-gap</span> adds a gap between columns in the row, to a value set as <span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">$theme-column-gap</span> in settings</p>

    <div class="g-row margin-top-half font-sans-f2">
      <div class="g-col-1 border-x-eighth border-color-black-cool-90">
        <div class="text-align-center padding-x-base">1</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">2</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">3</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">4</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">5</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">6</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">7</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">8</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">9</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">10</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">11</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row g-gap margin-top-half">
      <div class="g-col-4">
        <div class="text-align-center border-pixel border-color-black-cool-10 padding-base">.g-col-8</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-pixel border-color-black-cool-10 padding-base">.g-col-3</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-pixel border-color-black-cool-10 padding-base">.g-col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="font-sans-f6 font-weight-400 margin-top-double margin-bottom-half"><span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">.g-gap-large</span> adds a gap between columns in the row, to a value set as <span class="font-mono-f4 padding-y-eighth padding-x-quarter background-color-white-warm-4 border-radius-small">$theme-column-gap-large</span> in settings</p>

    <div class="g-row margin-top-half font-sans-f2">
      <div class="g-col-1 border-x-eighth border-color-black-cool-90">
        <div class="text-align-center padding-x-base">1</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">2</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">3</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">4</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">5</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">6</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">7</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">8</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">9</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">10</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">11</div>
      </div>
      <div class="g-col-1 border-x-eighth border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-base">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row g-gap-large margin-top-half">
      <div class="g-col-4">
        <div class="text-align-center border-pixel border-color-black-cool-10 padding-base">.g-col-8</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-pixel border-color-black-cool-10 padding-base">.g-col-3</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-pixel border-color-black-cool-10 padding-base">.g-col-5</div>
      </div>
    </div><!-- l.row -->

  </div><!-- l.container -->
</div><!-- div -->
