# Project specific ProGuard / R8 rules for maximum performance & zero lag
-keepattributes SourceFile,LineNumberTable,*Annotation*

# Keep Capacitor Bridge & Javascript Interfaces
-keep public class com.getcapacitor.** { *; }
-keep class * implements com.getcapacitor.Plugin { *; }
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep all installed Capacitor plugins safe
-keep class com.capgo.nativebiometric.** { *; }
-keep class com.capacitorjs.plugins.localnotifications.** { *; }
-keep class com.capacitorjs.plugins.filesystem.** { *; }
-keep class com.capacitorjs.plugins.preferences.** { *; }
-keep class com.capacitorjs.plugins.browser.** { *; }
-keep class com.capacitorjs.plugins.app.** { *; }
-keep class com.capacitorjs.plugins.statusbar.** { *; }

-dontwarn com.getcapacitor.**
-dontwarn androidx.**
