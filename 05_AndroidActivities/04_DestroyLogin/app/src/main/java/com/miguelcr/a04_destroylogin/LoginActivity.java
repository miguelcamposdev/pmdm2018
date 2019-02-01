package com.miguelcr.a04_destroylogin;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void irDashboard(View view) {
        Intent i = new Intent(this, DashboardActivity.class);
        startActivity(i);

        // OPCIÓN 1
        // finalizo este Activity para que no entre en la pila de navegación
        // finish();
    }
}
