---
draft: true
title: Post title
author: Post author
description: Short, 1-2 sentence description for post thumbnail/card and
  individual post page
SEOdescription: 150 character SEO focused description
pubDate: 2024-03-01T18:44:56.087Z
imageUrl: https://masonmedia.github.io/json-server/images/pc-hotel-bed-blue.avif
imageAlt: Add image alt text = this same text will be applied to the carousel if used
category: blog
tags:
  - four-seasons
  - seattle
  - hotels
carousel:
  - url: /images/uploads/belmond-bellini-review-2.png
  - url: /images/uploads/belmond-bellini-review-10.jpeg
  - url: /images/uploads/belmond-bellini-review-9.jpeg
gallery: []
contents:
  - html-3x-grid
  - ridiculus-mus-mauris-vitae
  - html-image-using-figure-and-caption
  - faucibus-nisl-tincidunt
  - another-h2
---
# Lorem ipsum titlesum

Make title heading H1 and all subsequent headings H2.

## HTML 3-column grid

Copy and paste the code below for a 3-column side by side image grid. Put the code exactly where you want it in the post as you would text. Then copy-paste the image filepaths you want into the code from the media library. 

Access the media library in the image widget below > `expand the dropdown` > click `"Choose an image"` and the media window will pop up. 

Name your images before uploading them using the title of the post with a number for each image i.e. `mandarin-hong-kong-1.jpg`. This makes it easy especially for grids so you don't have to copy/paste every image, just change the 1, 2, 3 etc. ending.

Once uploaded, select `"Copy name"` or "Copy path" from the top right. Go to the code below and paste the image name into the `src=""` atrribute, between the quotes, after `/images/uploads/ `

i.e. **`src="`**

   `<figure>
    <img class="grid-image" `**`src="`**

![]()

<div class="row row-cols-1 row-cols-lg-3 g-3 py-3 px-0">
  <div class="col">
    <figure>
        <img alt="" class="grid-image" src="/images/uploads/img_3693.jpeg" />
    </figure>
  </div>
  <div class="col">
    <figure>
        <img alt="" class="grid-image" src="/images/uploads/img_3693.jpeg" />
    </figure>
  </div>
  <div class="col">
    <figure>
        <img alt="" class="grid-image" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </figure>
  </div>
</div>

## HTML 2x grid

Copy and paste the code below for a 2-column side by side image grid.

<div class="row row-cols-1 row-cols-lg-2 g-3 py-3 px-0">
  <div class="col">
    <figure>
      <img class="grid-image" src="**<!==add image name/file path here==>**" alt="" />
    </figure>
  </div>
  <div class="col">
    <figure>
      <img class="grid-image" src="<!==add image name/file path here==>" alt="" />
    </figure>
  </div>
</div>

## HTML image using figure and caption

If desired you can copy/paste the `<figcaption> `element which adds a text description of the image just below it. It isn't necessary and if used needs to be added to every other image in the grid so it doesn't a) look imbalanced, and b) misalign spacing.

<figure>
    <img src="https://masonmedia.github.io/json-server/images/pc-hotel-bed-blue.avif"
         alt="Albuquerque, New Mexico">
    **`<figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>`**
</figure>

Also can use this approach below using the standard image widget, with simple text description below:\

![Albuquerque, New Mexico](https://masonmedia.github.io/json-server/images/pc-hotel-bed-blue.avif)
*A single track trail outside of Albuquerque, New Mexico.*

## Making a table of contents

Every title in your post gets converted into an id that can be used as an anchor for article navigation. The subtitle ***Making a table of contents*** becomes `<h2 id="making-a-table-of-contents">Making a table of Contents</h2>` automatically.

## Another H2

In aliquam sem fringilla ut morbi tincidunt. Cras pulvinar mattis nunc sed. Volutpat consequat mauris nunc congue nisi vitae. Neque gravida in fermentum et sollicitudin ac orci phasellus. Amet commodo nulla facilisi nullam. Leo vel fringilla est ullamcorper eget nulla. Viverra ipsum nunc aliquet bibendum enim facilisis. Enim neque volutpat ac tincidunt vitae semper. Commodo elit at imperdiet dui accumsan sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Massa placerat duis ultricies lacus sed turpis. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Ultricies tristique nulla aliquet enim tortor at. Eu augue ut lectus arcu bibendum.

## Yessir

Quisque egestas diam in arcu cursus euismod quis. Dui ut ornare lectus sit amet est. Elit ut aliquam purus sit. In hendrerit gravida rutrum quisque non. Tristique magna sit amet purus. Purus sit amet volutpat consequat mauris nunc congue. Nisi porta lorem mollis aliquam ut. Natoque penatibus et magnis dis parturient montes nascetur. Suspendisse in est ante in nibh mauris cursus mattis molestie. Tellus molestie nunc non blandit massa enim nec dui. Cras semper auctor neque vitae tempus quam pellentesque. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Odio ut sem nulla pharetra diam sit amet nisl. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Vitae purus faucibus ornare suspendisse sed nisi. Posuere ac ut consequat semper viverra nam libero justo laoreet. Placerat vestibulum lectus mauris ultrices.
