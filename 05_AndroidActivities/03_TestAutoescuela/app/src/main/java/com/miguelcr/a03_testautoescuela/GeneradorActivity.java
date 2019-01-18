package com.miguelcr.a03_testautoescuela;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.Toast;

public class GeneradorActivity extends AppCompatActivity {
    Button btnGenerar;
    Spinner spinnerNumeroPreguntas;
    int[] numeroPreguntas = {0, 5, 10};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_generador);

        btnGenerar = findViewById(R.id.buttonGenerar);
        spinnerNumeroPreguntas = findViewById(R.id.spinnerPreguntas);

        // Evento click del botón
        btnGenerar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int posicionSeleccionada = spinnerNumeroPreguntas.getSelectedItemPosition();

                if(posicionSeleccionada == 0) {
                    Toast.makeText(GeneradorActivity.this, getString(R.string.error_numero_preguntas), Toast.LENGTH_SHORT).show();
                } else {
                    navegarPreguntasActivity(posicionSeleccionada);
                }

            }
        });

        // Adaptador del spinner
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(
                this,
                R.array.numero_preguntas,
                android.R.layout.simple_spinner_item);

        // Specify the layout to use when the list of choices appears
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        // Apply the adapter to the spinner
        spinnerNumeroPreguntas.setAdapter(adapter);
    }

    private void navegarPreguntasActivity(int posicion) {
        Intent i = new Intent(
                GeneradorActivity.this,
                PreguntasActivity.class
        );

        // Pasar parámetros a PreguntasActivity
        i.putExtra(Constants.EXTRA_NUM_PREGUNTAS, numeroPreguntas[posicion]);

        // Lanzamos el Activity
        startActivity(i);
    }
}
