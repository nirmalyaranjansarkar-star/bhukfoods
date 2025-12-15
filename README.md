# Bhuk Foods - Operations Manual

## 🚀 How to Update the Website (The Reliable Workflow)

Because we are in a Cloud Environment, use this manual workflow to ensure your site updates correctly every time.

### Step 1: Deploy to Live Website
Whenever you make a change and want customers to see it immediately:

1.  Open the Terminal (Ctrl + `).
2.  Run this command:
    ```bash
    npm run deploy
    ```
    *(This builds your code and uploads it to Firebase Hosting).*

### Step 2: Save Your Code (Backup)
After deploying, you must save your code to GitHub so you never lose work.

1.  Click the **Source Control Icon** (Git) on the left sidebar.
2.  Type a message in the box (e.g., "Updated pricing").
3.  Click **Commit & Push**.

---

## 🛠️ Troubleshooting

### "Permission Denied" or "Login Required"
If the terminal asks you to log in:
1.  Run: `firebase login --no-localhost`
2.  Click the link -> Login -> Copy the code -> Paste in terminal.

### Site Crashing?
1.  Run `npm run dev` to test locally.
2.  Check the terminal for red error messages.