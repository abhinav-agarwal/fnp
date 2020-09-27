package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fnp.core.models.BestSeller;
import com.fnp.core.models.Trending;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Trending.class,
    ComponentExporter.class}, resourceType = TrendingImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TrendingImpl implements Trending {

  @ValueMapValue(
      name = "mainTitle",
      injectionStrategy = InjectionStrategy.OPTIONAL
  )
  protected String mainTitle;

  @SlingObject
  protected Resource resource;


  private static final Logger LOGGER = LoggerFactory.getLogger(TrendingImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/trending";

  @Override
  public String getExportedType() {
    return TrendingImpl.RESOURCE_TYPE;
  }

  @Override
  public List<Map> getItems() {
    List<Map> categoryDetails = new ArrayList<>();
    if(null != resource) {
      Resource itemResource = resource.getChild("multi");
      if(itemResource != null && itemResource.hasChildren()) {
        for (Resource childResource : itemResource.getChildren()) {
          ValueMap valueMap = childResource.getValueMap();
          Map<String, String> iconMap = new HashMap<>();
          iconMap.put("imagePath", valueMap.get("imagePath", String.class));
          iconMap.put("imageTitle", valueMap.get("imageTitle", String.class));
          iconMap.put("price", valueMap.get("price", String.class));
          categoryDetails.add(iconMap);
        }
      }
    }
    return categoryDetails;
  }

  @Override
  public String getTitle() {
    return this.mainTitle;
  }

}
