package com.customer_app_v4;


import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;
public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "customer_app_v4";
  }
   @Override
   protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
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

}
