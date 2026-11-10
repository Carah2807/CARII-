# For Carah ♡  
### A romantic interactive website by Jai

A deeply personal digital gift for Carah — combining a love letter, sincere apology, memory scrapbook, support for her dreams, and a respectful official girlfriend proposal.

---

## How to Deploy on GitHub Pages

### 1. Create a new repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `for-carah` (or any name you like)
3. Set to **Public**
4. Do **not** check “Add a README” (we already have one)
5. Click **Create repository**

### 2. Upload the files
You can either:

**Option A – Drag & drop (easiest)**  
1. On the new repository page, click **uploading an existing file**  
2. Drag all files from this folder (`index.html`, `style.css`, `script.js`, `README.md`) into the browser  
3. Commit the changes

**Option B – Git command line**
```bash
git init
git add .
git commit -m "For Carah ♡"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/for-carah.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main`  
4. Folder: `/ (root)`
5. Click **Save**

After 1–2 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/for-carah/
```

---

## Important Customizations

### WhatsApp button
Open `index.html` and find this line:

```html
<a href="https://wa.me/YOUR_NUMBER_HERE" ...>
```

Replace `YOUR_NUMBER_HERE` with your full international number (no + or spaces), for example:

```html
https://wa.me/639171234567
```

### Personal details
All the letters, memories, and messages are already written based on the information you provided. You can edit any text directly in `index.html`.

---

## Features
- Beautiful pink romantic aesthetic
- Interactive envelope opening experience
- Personal love letter
- Interactive memory scrapbook
- Support for Carah’s dreams
- Sincere apology section
- Clear promises of patience, respect, consistency, support, communication & freedom
- Future hopes (presented as hopes, not demands)
- Respectful proposal with working “Yes” and “I need more time” buttons
- Celebration + WhatsApp link after Yes
- Fully responsive (mobile, tablet, desktop)
- Floating hearts & soft animations
- Reduced-motion support
- No external dependencies except Google Fonts

---

## Design Principles Followed
- Both proposal buttons work properly
- “I need more time” is respected with no guilt or pressure
- No manipulative UI tricks
- Focus on genuine care, respect for boundaries, and support for her dreams
- Central message: *“Not a perfect love story. A beautiful one that we build together.”*

---

Made with love by Jai, for Carah. ♡
