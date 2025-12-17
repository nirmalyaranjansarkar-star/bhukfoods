# Bhuk Foods - Operations Manual

## 🚀 CI/CD Setup Instructions (Important)

We have added the configuration files to link your code to **bhuk-foods-e54d4**. 

For the "GitHub Auto-Deploy" to work, you must complete this one-time security step:

### 1. Get the Key from Firebase
1. Open [Firebase Console](https://console.firebase.google.com/project/bhuk-foods-e54d4/settings/serviceaccounts/adminsdk).
2. Go to **Project Settings** -> **Service accounts**.
3. Click **Generate new private key**.
4. This will download a file (e.g., `bhuk-foods-firebase-adminsdk.json`). Open it and copy **all** the text inside.

### 2. Add Key to GitHub
1. Go to your GitHub Repo: [https://github.com/nirmalyaranjansarkar-star/bhukfoods](https://github.com/nirmalyaranjansarkar-star/bhukfoods)
2. Click **Settings** (Top Tab) -> **Secrets and variables** (Left Menu) -> **Actions**.
3. Click **New repository secret**.
4. **Name:** `FIREBASE_SERVICE_ACCOUNT_BHUK_FOODS`
5. **Secret:** Paste the text you copied from the file.
6. Click **Add secret**.

### 3. Deploy
Now, whenever you push code to the `main` branch, GitHub will automatically build and deploy your site to `https://bhuk-foods-e54d4.web.app`.

---

### Local Development
To run the app on your machine (Preview):
```bash
npm install
npm run dev
```
