package com.omniadmin.hub;

import android.os.Bundle;
import android.webkit.WebView;
import android.widget.FrameLayout;
import android.widget.TextView;
import android.view.Gravity;
import android.view.View;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private TextView floatingHubBtn;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Sleek floating 'Return to Hub' button that overlays across all live websites inside the APK
        floatingHubBtn = new TextView(this);
        floatingHubBtn.setText("🏠 Hub");
        floatingHubBtn.setTextColor(Color.WHITE);
        floatingHubBtn.setTextSize(13);
        floatingHubBtn.setPadding(32, 18, 32, 18);

        GradientDrawable bg = new GradientDrawable();
        bg.setColor(Color.parseColor("#12141c"));
        bg.setStroke(3, Color.parseColor("#3b82f6"));
        bg.setCornerRadius(50);
        floatingHubBtn.setBackground(bg);
        floatingHubBtn.setElevation(24);

        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.WRAP_CONTENT,
            FrameLayout.LayoutParams.WRAP_CONTENT
        );
        params.gravity = Gravity.BOTTOM | Gravity.END;
        params.setMargins(0, 0, 36, 64);

        floatingHubBtn.setOnClickListener(v -> {
            WebView webView = (getBridge() != null) ? getBridge().getWebView() : null;
            if (webView != null) {
                webView.loadUrl("https://localhost/index.html");
                floatingHubBtn.setVisibility(View.GONE);
            }
        });

        // Add to main content view
        addContentView(floatingHubBtn, params);
        floatingHubBtn.setVisibility(View.GONE);

        // Setup Bulletproof Fail-Safe: If remote server is unreachable, offline, or returns error, load local assets
        setupFailSafeWebView();
    }

    private void setupFailSafeWebView() {
        if (getBridge() == null || getBridge().getWebView() == null) return;
        WebView webView = getBridge().getWebView();

        webView.setWebViewClient(new com.getcapacitor.BridgeWebViewClient(getBridge()) {
            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                if (failingUrl != null && !failingUrl.contains("localhost")) {
                    view.post(() -> view.loadUrl("https://localhost/index.html"));
                    return;
                }
                super.onReceivedError(view, errorCode, description, failingUrl);
            }

            @Override
            public void onReceivedError(WebView view, android.webkit.WebResourceRequest request, android.webkit.WebResourceError error) {
                if (request != null && request.isForMainFrame()) {
                    String url = request.getUrl() != null ? request.getUrl().toString() : "";
                    if (!url.contains("localhost")) {
                        view.post(() -> view.loadUrl("https://localhost/index.html"));
                        return;
                    }
                }
                super.onReceivedError(view, request, error);
            }

            @Override
            public void onReceivedHttpError(WebView view, android.webkit.WebResourceRequest request, android.webkit.WebResourceResponse errorResponse) {
                if (request != null && request.isForMainFrame() && errorResponse != null && errorResponse.getStatusCode() >= 400) {
                    String url = request.getUrl() != null ? request.getUrl().toString() : "";
                    if (!url.contains("localhost")) {
                        view.post(() -> view.loadUrl("https://localhost/index.html"));
                        return;
                    }
                }
                super.onReceivedHttpError(view, request, errorResponse);
            }
        });
    }

    @Override
    public void onResume() {
        super.onResume();
        checkHubButton();
    }

    public void checkHubButton() {
        if (floatingHubBtn != null && getBridge() != null && getBridge().getWebView() != null) {
            String url = getBridge().getWebView().getUrl();
            if (url != null && !url.contains("localhost") && !url.contains("vercel.app")) {
                floatingHubBtn.setVisibility(View.VISIBLE);
            } else {
                floatingHubBtn.setVisibility(View.GONE);
            }
        }
    }

    @Override
    public void onBackPressed() {
        WebView webView = (getBridge() != null) ? getBridge().getWebView() : null;
        if (webView != null) {
            String currentUrl = webView.getUrl();
            if (currentUrl != null && !currentUrl.contains("localhost") && !currentUrl.contains("vercel.app")) {
                if (webView.canGoBack()) {
                    webView.goBack();
                } else {
                    webView.loadUrl("https://localhost/index.html");
                    if (floatingHubBtn != null) floatingHubBtn.setVisibility(View.GONE);
                }
                return;
            }
        }
        super.onBackPressed();
    }
}
