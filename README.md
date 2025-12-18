# Bhuk Foods - High-Performance Food Subscription Web App

This project is a complete, production-ready web application for a local food subscription service, built with React, TypeScript, and Firebase. It's designed for high performance, ease of use, and simple deployment.

## 🚀 Deployment Instructions (Live Hosting)

This project is configured for one-command deployment to Firebase Hosting.

### Manual Deployment (Recommended First Step)
To deploy the entire application (Website + Database Rules + Storage Rules) from your local machine:

1.  **Install Firebase Tools**: If you haven't already, run `npm install -g firebase-tools` in your terminal.
2.  **Login to Firebase**: Run `firebase login`.
3.  **Connect Project**: Run `firebase use --add` and select the Firebase project you created.
4.  **Fill Config Keys**: Open `firebaseConfig.ts` and replace the placeholder values with your actual Firebase project configuration keys. You can find these in your Firebase Project Settings.
5.  **Deploy**: Run the deploy command from your terminal:
    ```bash
    npm run deploy
    ```
6.  Wait for the process to complete. Firebase will output your live **Hosting URL** (e.g., `https://your-project-name.web.app`). Your site, database rules, and storage rules are now live.

---

### 💻 Local Development
To run the app on your local machine and preview changes before publishing:
1.  **Install Dependencies**: `npm install`
2.  **Run Development Server**: `npm run dev`

This will start a local server, typically at `http://localhost:5173`.

### ⚙️ Firebase Backend Configuration
This project includes pre-configured files for your Firebase backend:
-   `firebase.json`: The master config file for deployment.
-   `database.rules.json`: Security rules for your Firestore database. It allows public reads but restricts writes to authenticated users (like you in the admin panel).
-   `storage.rules`: Security rules for your file storage. Allows public viewing of gallery images but restricts uploads.
-   `firestore.indexes.json`: Configuration for optimizing database queries.

When you run `npm run deploy`, these rules are automatically applied to your Firebase project, making it secure and ready for production.

### 📸 Admin Dashboard
-   The Admin Dashboard is located at `/admin`.
-   From here, you can upload photos to your gallery. The app automatically converts them to high-performance WebP format, uploads them to Firebase Storage, and saves the link in your Firestore database.
-   You can also access your Google Sheets for new orders and leads directly from the dashboard.