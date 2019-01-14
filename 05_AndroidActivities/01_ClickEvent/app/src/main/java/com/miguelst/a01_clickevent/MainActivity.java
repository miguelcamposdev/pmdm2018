package com.miguelst.a01_clickevent;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void eventoClick(View view) {
        Log.i("PRUEBA","Entra en evento click");

        // Declaramos un objeto de tipo Intent para realizar
        // la navegación a otro Activity
        // En concreto vamos a hacer la siguiente navegación:
        // MainActivity > SecundarioActivity
        Intent i = new Intent(
                MainActivity.this,
                SecundarioActivity.class
        );

        // Iniciamos la navegación
        startActivity(i);

    }
}
