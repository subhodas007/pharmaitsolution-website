# Pharma IT Solution — GitHub Pages Website

## Files
Static multi-page website for Pharma IT Solution.

## Publish on GitHub Pages
1. Create a GitHub repository, e.g. `pharmaitsolution-website`.
2. Upload all files and folders from this package to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish.
7. In **Custom domain**, enter:
   `pharmaitsolution.com`
8. Save and enable **Enforce HTTPS** after DNS has propagated.

## DNS at Hostycare
For an apex/root domain, configure the four GitHub Pages A records shown in GitHub's current Pages documentation. GitHub may also provide an IPv6 AAAA configuration. For `www`, create a CNAME pointing to your GitHub Pages hostname.

Do not remove your email MX records when configuring website DNS. Your email and website can use the same domain.

## Email
The forms on this static website open the visitor's email client and address the enquiry to:
`subho.das@pharmaitsolution.com`

This avoids requiring a backend. For production lead capture, connect the forms to a form service or your own backend later.

## Before launch
- Replace placeholder legal text with your final business/legal details.
- Add your registered office/contact address if desired.
- Add actual client/consultant statistics only when verified.
- Review all claims and service descriptions.
