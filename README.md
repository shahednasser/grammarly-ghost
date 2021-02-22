# Grammarly with Ghost
An extension that allows Grammarly to work on Ghost's editor

## Download Extension

You can download the extension on Chrome [here](https://chrome.google.com/webstore/detail/grammarly-with-ghost/iakfoofepmfjafjepidembmheemidbdb?hl=en&authuser=1)

## Why is This Necessary
If you use [Ghost](https://ghost.org/) for your blogging needs and you need Grammarly as well to make your life easier, you probably noticed that Grammarly does not work with Ghost's editor Koenig. 

You can read more about it in these links:

- [Grammarly support for the Koenig editor Issue](https://github.com/TryGhost/Ghost/issues/11252)
- [Ghost Forum: Grammarly Support](https://forum.ghost.org/t/grammarly-support/2220)

## The Solution

While looking through the above links, I saw different people that you can get Grammarly to work with Ghost's editor by simply removing the attribute `data-gramm="false"`. I tried doing that with my own blog and it worked!

It should be noted that the reason behind Grammarly not working with Ghost's editor is due to it not supporting it. So, I am not sure if this solution will cause any problems on your side. For me, it works perfectly well. There's an issue detailed [here](https://gitmemory.com/issue/TryGhost/Ghost/11252/671525102) about clicking on "Edit in Grammarly," however, I couldn't reproduce it.

## The Extension

**Note: This extension assumes you already have the Grammarly extension installed in your browser**

So, the extension basically detects the element with the attribute `data-gramm="false"` and removes that, while also doing some check on the height and width of the element (you can read more about it [here](https://support.grammarly.com/hc/en-us/articles/115000090392-I-do-not-see-the-G-icon-on-a-certain-web-page-or-in-a-certain-text-field-but-see-it-on-other-web-pages-))

Once you install the extension, you need to open your Ghost blog, then click on the icon of the extension. After that you can enable the extension to work on this host or domain. Once you enable it, it will do the work specified above whenever necessary. If you do not enable it for the domain you need it to work on, it will not do anything.

---

## Attributions

- Toggle button is from [sButtons](https://github.com/sButtons/sbuttons)
- Extension icon is from [Dinosoft Lab on Iconscout](https://iconscout.com/contributors/dinosoftlabs)

---

## Contribution

If you find any issues and bugs in the extension, or have any ideas missing in it, you are welcome to open an issue with it!

---

## License

[MIT](./LICENSE)
