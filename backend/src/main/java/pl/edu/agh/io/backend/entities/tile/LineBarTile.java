package pl.edu.agh.io.backend.entities.tile;

import pl.edu.agh.io.backend.entities.chart.ChartData;

import java.util.List;

public record LineBarTile(TileType type, String label, Integer refreshingRate, List<String> xVals, List<ChartData> chartData) {
    public void addChartData(ChartData chartData) {
        this.chartData.add(chartData);
    }
}
