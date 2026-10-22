# اقساط‌یار (PWA)

## انتشار روی GitHub Pages
1. در github.com یک مخزن (Repository) جدید بسازید، مثلاً `aghsat`. (Public باشد)
2. روی «uploading an existing file» بزنید و هر ۵ فایل را آپلود کنید: index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png. سپس Commit کنید.
3. Settings > Pages > Source: «Deploy from a branch» > Branch: main و پوشهٔ / (root) > Save.
4. بعد از ۱ تا ۲ دقیقه آدرس شما این است: https://USERNAME.github.io/aghsat/
5. آدرس را در Chrome گوشی باز کنید > منوی ⋮ > Install app (یا Add to Home screen).

## نکته‌ها
- بعد از اولین بازشدن، برنامه آفلاین هم کار می‌کند.
- اطلاعات فقط روی همان گوشی ذخیره می‌شود؛ حتماً از بخش تنظیمات پشتیبان بگیرید.
- برای انتشار نسخهٔ جدید، فایل index.html را جایگزین کنید و در sw.js عدد نسخه (aghsat-v1) را به v2 تغییر دهید.
