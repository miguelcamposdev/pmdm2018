package com.miguelst.a02_pasoparametrosactivity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {
    EditText etNombre, etEdad;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etNombre = findViewById(R.id.editTextNombre);
        etEdad = findViewById(R.id.editTextEdad);
    }


    public void navegarAlSecundario(View view) {
        Intent intentSecundario = new Intent(
                this,
                SecundarioActivity.class
        );

        // Obtengo lo que el usuario ha escrito en los campos
        // de tipo EditText
        String n = etNombre.getText().toString();
        int e = Integer.parseInt(etEdad.getText().toString());

        // Podemos definir uno por uno todos los parámetros
        // que queramos enviar al nuevo Activity
        intentSecundario.putExtra("nombre", n);
        intentSecundario.putExtra("edad", e);

        // Lanza el Activity destino
        startActivity(intentSecundario);
    }
}
