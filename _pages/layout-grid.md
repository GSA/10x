---
layout: prototype-clean
title: 10x
permalink: /layout-grid/
---

<div class="font-mono-f4 font-weight-300 padding-top-base padding-bottom-double tablet:padding-top-double tablet:padding-bottom-triple">

  <div class="g-container-tablet-plus padding-x-double margin-top-half">
    <h1 class="font-sans-f14 font-weight-300 margin-top-0">USWDS draft layout grid</h1>
    <p class="docs-text"><strong>Note:</strong> <code class="docs-inline-code">.g-container</code>, <code class="docs-inline-code">.g-gap</code>, and <code class="docs-inline-code">.g-col-fill</code> all have mobile-first responsive variants. Only the first example shows them.</p>
    <p class="docs-text"><code class="docs-inline-code">.g-col-fill</code> items flex to fit</p>

    <div class="g-row margin-top-half">
      <div class="g-col-6 tablet-plus:g-col-fill border-pixel border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-6</div>
      </div>
      <div class="g-col-6 tablet-plus:g-col-fill border-pixel border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-6</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col-fill border-pixel border-top-width-0 tablet-plus:border-top-width-pixel tablet-plus:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col-fill border-pixel border-top-width-0 tablet-plus:border-top-width-pixel border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col-fill border-pixel border-top-width-0 tablet-plus:border-top-width-pixel border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-base">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-base">.g-col-4</div>
      </div>
    </div><!-- g-row -->

    <div class="g-row margin-top-half">
      <div class="g-col tablet:g-col-fill border-pixel border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet:g-col-fill</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col</div>
      </div>
      <div class="g-col tablet:g-col-fill border-pixel border-top-width-0 tablet:border-top-width-pixel tablet:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet:g-col-fill</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col</div>
      </div>
      <div class="g-col tablet:g-col-fill border-pixel border-top-width-0 tablet:border-top-width-pixel tablet:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-base">.tablet:g-col-fill</div>
        <div class="tablet:display-none text-align-center padding-base">.g-col</div>
      </div>
    </div><!-- g-row -->

    <p class="docs-text"><code class="docs-inline-code">.g-col-auto</code> items fit the content and do not flex</p>

    <div class="g-row margin-top-half">
      <div class="g-col-auto border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-auto</div>
      </div>
      <div class="g-col-fill border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-fill</div>
      </div>
      <div class="g-col-fill border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-fill</div>
      </div>
      <div class="g-col-auto border-pixel border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-auto</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-col-[1-12]</code> set a fixed width of [n] columns in a 12-column grid</p>

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

    <p class="docs-text"><code class="docs-inline-code">.g-offset-[1-12]</code> offsets the column by [n] columns</p>

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
      <div class="g-col-8 g-offset-4 border-pixel border-color-black-cool-10">
        <div class="text-align-center padding-base">.g-col-8.g-offset-4</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text">Rows wrap when columns add up to more than 12</p>

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

    <p class="docs-text"><code class="docs-inline-code">.g-gap</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap</code> in settings</p>

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

    <p class="docs-text"><code class="docs-inline-code">.g-gap-large</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap-large</code> in settings</p>

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
