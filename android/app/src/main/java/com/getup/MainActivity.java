package com.getup;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;
import android.view.View;
import android.content.Intent;
import android.os.Bundle;
import com.emekalites.react.alarm.notification.BundleJSONConverter;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import org.json.JSONObject;
import android.app.Activity;
import android.content.Context;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "GetUp";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

  /*
   * Start of code from
   * https://stackoverflow.com/questions/36046055/hide-android-navigation-bar-in-
   * react-native
   */

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    hideNavigationBar();
  }

  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
      hideNavigationBar();
    }
  }

  @Override
  public void onNewIntent(Intent intent) {
    try {
      Bundle bundle = intent.getExtras();
      JSONObject data = BundleJSONConverter.convertToJSON(bundle);
      getReactInstanceManager().getCurrentReactContext()
          .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
          .emit("OnNotificationOpened", data.toString());
    } catch (Exception e) {
      System.err.println("Exception when handling notification openned. " + e);
    }
  }

  public void onAttach(Context context) {
    Activity a;

    if (context instanceof Activity) {
      a = (Activity) context;
    }
  }

  private void hideNavigationBar() {
    getWindow().getDecorView()
        .setSystemUiVisibility(View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
  }

  /*
   * End of code from
   * https://stackoverflow.com/questions/36046055/hide-android-navigation-bar-in-
   * react-native
   */
}
